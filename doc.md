# Screen Documentation

This document describes each screen component in `src/screens/` and explains the purpose of the main constants, state variables, and functions used by each screen.

---

## `CounterScreen.tsx`

### Purpose
Simple wrapper screen that displays the `Counter` feature component.

### Main exports
- `CounterScreen`: React functional component.

### Main constants
- `styles`: Stylesheet object for layout and container styles.

### Behavior
- Renders a `SafeAreaView` that contains a centered `Counter` component.

---

## `DashboardScreen.tsx`

### Purpose
Main learning dashboard that shows progress, unlocked levels, lessons, and quiz score summaries.

### Main exports
- `DashboardScreen`: React functional component.

### State and constants
- `navigation`: navigation object from React Navigation.
- `dispatch`: Redux dispatch.
- `language`, `completedLessons`, `quizScores`: values read from Redux state.
- `t`: translated text object for the current language.
- `settingsVisible`: whether the settings modal is visible.
- `expandedLevel`: which level panel is currently expanded.
- `totalLessons`: total number of lessons across all levels.
- `completedCount`: number of lessons marked completed.
- `progressPercent`: percentage of completed lessons.
- `quizScoresArray`: array of numeric quiz scores.
- `averageAccuracy`: average quiz score percentage.

### Functions
- `isLevelUnlocked(lvlId: string) => boolean`
  - Returns true if the requested level is unlocked.
  - Level A1 is always unlocked.
  - Other levels unlock only when all lessons from the previous level are completed.

- `handleResetProgress() => void`
  - Opens a confirmation alert.
  - If confirmed, dispatches `resetProgress()` and closes settings.

- `handleRestartTutorial() => void`
  - Dispatches `resetOnboarding()`.
  - Resets navigation stack to show `Onboarding` screen.

- `handleToggleLevel(lvlId: string, unlocked: boolean) => void`
  - Expands or collapses the level entry if unlocked.
  - If locked, shows an alert message.

### Behavior
- Displays overall progress, completed lesson ratio, and average quiz accuracy.
- Lists all levels from `curriculum`.
- Locked levels show a lock icon; unlocked levels can expand to show lessons.
- Each lesson entry navigates to `Lesson` screen.
- Settings button exposes reset and restart actions.

---

## `UIGalleryScreen.tsx`

### Purpose
A showcase page for the app’s custom UI components: buttons, switches, and information cards.

### Main exports
- `UIGalleryScreen`: React functional component.

### State and constants
- `isNotificationsEnabled`: boolean to control the demo notification switch.
- `isSlowMode`: boolean to control the demo slow mode switch.

### Behavior
- Renders sample `CustomButton` variants: primary, secondary, danger, and glass.
- Renders sample `CustomSwitch` controls.
- Includes a description card explaining the UI theme and glass style.

---

## `OnboardingScreen.tsx`

### Purpose
Onboarding flow for first-time users. Guides language selection, lesson preview, quiz preview, and progression levels.

### Main exports
- `OnboardingScreen`: React functional component.

### State and constants
- `dispatch`: Redux dispatch.
- `navigation`: navigation object from React Navigation.
- `currentLanguage`: current language code from Redux.
- `t`: translations object for the current language.
- `activeIndex`: active slide index in onboarding.
- `scrollX`: animated value for horizontal movement (unused in current markup but prepared for animation).
- `fadeAnim`: animated opacity value for slide transitions.
- `slideAnim`: animated vertical offset for slide transitions.
- `slides`: array of onboarding items, each with:
  - `title`: slide title.
  - `subtitle`: slide subtitle.
  - `icon`: icon component.
  - `content`: preview content rendered inside the slide.

### Functions
- `handleNext() => void`
  - Advances to the next onboarding slide if available.
  - If on final slide, calls `handleFinish()`.

- `handleFinish() => void`
  - Dispatches `completeOnboarding()` to mark onboarding complete.
  - Resets navigation to the `Dashboard` screen.

### Effects
- `useEffect(() => { ... }, [activeIndex])`
  - Runs when the active slide changes.
  - Resets `fadeAnim` and `slideAnim` to initial values.
  - Starts parallel animations to fade and slide in the new slide.

### Behavior
- Renders the current slide’s icon, title, subtitle, and content.
- Shows pagination dots for slide progress.
- Provides Back and Next/Get Started buttons.
- Includes a Skip button on all but the final slide.
- Includes a preview card showing a sample quiz format.

---

## `LessonScreen.tsx`

### Purpose
Displays a single lesson’s introduction, rules, examples, and quiz start action.

### Main exports
- `LessonScreen`: React functional component.

### State and constants
- `route`: navigation route object.
- `navigation`: navigation object.
- `language`: current language from Redux state.
- `t`: translated text object for current language.
- `levelId`, `lessonId`: route parameters used to find the lesson.
- `targetLevel`: curriculum level object matching `levelId`.
- `targetLesson`: selected lesson object matching `lessonId`.
- `levelColor`, `levelAccent`: styling colors from the selected level.

### Behavior
- If the lesson is not found, renders an error message and a Back button.
- Shows lesson title and level badge in a header.
- Displays lesson introduction text.
- Renders each rule from `targetLesson.rules` inside a `GlassCard`.
- Each rule also displays a German example sentence and its translation.
- Shows a summary card with lesson summary text.
- Displays a floating quiz action button that navigates to the `Quiz` screen with the same `levelId` and `lessonId`.

---

## `QuizScreen.tsx`

### Purpose
Interactive quiz experience for a lesson. Handles answer selection, checking, feedback, and score submission.

### Main exports
- `QuizScreen`: React functional component.

### State and constants
- `route`: route object from React Navigation.
- `navigation`: navigation object.
- `dispatch`: Redux dispatch.
- `language`: current language from Redux.
- `t`: translations object for current language.
- `levelId`, `lessonId`: route params used to load the quiz.
- `targetLevel`, `targetLesson`: level and lesson objects from `curriculum`.
- `quizQuestions`: quiz questions array from the selected lesson.
- `currentIndex`: current question index.
- `selectedOption`: currently selected answer option.
- `isAnswerChecked`: whether the user has checked the current answer.
- `correctCount`: number of correct answers selected so far.
- `quizFinished`: whether the quiz is completed.
- `progressBarWidth`: animated value for the progress bar fill width.
- `contentFade`: animated fade value for quiz content.
- `shakeAnim`: animated horizontal shake used for incorrect answer feedback.
- `popAnim`: animated scale used on option tap.
- `currentQuestion`: current quiz question object.
- `levelColor`: selected level color for UI styling.

### Functions
- `handleSelectOption(option: string) => void`
  - Sets the chosen answer option.
  - Prevents selection after the answer is checked.
  - Triggers a small pop animation on the selected card.

- `handleCheckAnswer() => void`
  - Validates the selected answer against `currentQuestion.correctAnswer`.
  - Sets `isAnswerChecked` to true.
  - Increments `correctCount` if the answer is correct.
  - If incorrect, triggers a shake animation.

- `handleNext() => void`
  - Fades out quiz content.
  - Advances to the next question if available.
  - Otherwise calls `handleFinishQuiz()`.

- `handleFinishQuiz() => void`
  - Computes final score percentage.
  - Dispatches `submitQuizScore()` with the lesson ID and score.
  - Animates the progress bar to 100%.
  - Sets `quizFinished` to true after the animation.

### Behavior
- If the lesson or quiz is missing, renders an error screen with a Back button.
- Displays question index, quiz progress, and current question text.
- Renders answer options as selectable cards.
- When an answer is checked, shows correct/incorrect styling and a detailed explanation card.
- On quiz completion, renders a result screen with badge, score, and action buttons for Dashboard or retake.

---

### Notes
- All screen components use the shared theme from `src/constants/theme`.
- Localization strings are loaded from `src/utils/localization`.
- `DashboardScreen`, `LessonScreen`, `OnboardingScreen`, and `QuizScreen` all depend on Redux state from `src/store/slices/germanSlice`.
