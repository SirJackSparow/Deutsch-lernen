/**
 * =====================================================
 *  DeutschLernen – Firestore Vocabulary Uploader
 * =====================================================
 * 
 * SETUP (one time only):
 * 1. Install dependencies:
 *      cd firebase && npm install
 * 
 * 2. Download your Firebase Service Account Key:
 *      Firebase Console -> Project Settings -> Service Accounts
 *      -> Generate new private key -> Download the JSON file
 *      -> Place it here as: firebase/serviceAccountKey.json
 * 
 * 3. Edit your vocab file (firebase/sample_vocab.json) with real data.
 * 
 * USAGE:
 *      node uploadVocabulary.js [filename.json]
 *
 *  Example:
 *      node uploadVocabulary.js sample_vocab.json
 *
 * =====================================================
 */

const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');

// ─────────────────────────────────────────────────
// 1. INIT FIREBASE ADMIN
// ─────────────────────────────────────────────────
const serviceAccountPath = path.join(__dirname, 'serviceAccountKey.json');

if (!fs.existsSync(serviceAccountPath)) {
  console.error('\n❌ ERROR: serviceAccountKey.json not found!');
  console.error('   Download your Service Account key from:');
  console.error('   Firebase Console -> Project Settings -> Service Accounts -> Generate new private key');
  console.error(`   Save it to: ${serviceAccountPath}\n`);
  process.exit(1);
}

const serviceAccount = require(serviceAccountPath);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// ─────────────────────────────────────────────────
// 2. READ JSON FILE
// ─────────────────────────────────────────────────
const filename = process.argv[2] || 'sample_vocab.json';
const filePath = path.join(__dirname, filename);

if (!fs.existsSync(filePath)) {
  console.error(`\n❌ ERROR: File not found: ${filePath}`);
  console.error(`   Usage: node uploadVocabulary.js <filename.json>\n`);
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// ─────────────────────────────────────────────────
// 3. UPLOAD VOCABULARY WORDS
// ─────────────────────────────────────────────────
async function uploadVocabulary() {
  const { vocabulary_version, words } = data;

  if (!words || !Array.isArray(words)) {
    console.error('\n❌ ERROR: JSON file must have a "words" array. See sample_vocab.json for format.\n');
    process.exit(1);
  }

  console.log(`\n📦 Starting upload of ${words.length} words (version: ${vocabulary_version})...\n`);

  const batch = db.batch();

  for (const word of words) {
    const docRef = db.collection('vocabulary').doc(word.id);
    batch.set(docRef, {
      level: word.level,
      germanWord: word.germanWord,
      article: word.article || null,
      translation: word.translation,
      exampleSentence: word.exampleSentence || null,
    });
    console.log(`  ✅ Queued: [${word.level}] ${word.article || ''} ${word.germanWord} → ${word.translation}`);
  }

  // 4. Update the version number in metadata/config
  const metaRef = db.collection('metadata').doc('config');
  batch.set(metaRef, {
    vocabulary_version: vocabulary_version || 1,
    updated_at: admin.firestore.FieldValue.serverTimestamp(),
  });

  // 5. Commit everything at once
  await batch.commit();

  console.log(`\n🎉 Success! ${words.length} words uploaded to Firestore.`);
  console.log(`📌 Vocabulary version set to: ${vocabulary_version}`);
  console.log(`\n💡 TIP: Next time you update words, increase "vocabulary_version" in your JSON file`);
  console.log(`   so the app knows to download the fresh data.\n`);
  
  process.exit(0);
}

uploadVocabulary().catch((err) => {
  console.error('\n❌ Upload failed:', err.message);
  process.exit(1);
});
