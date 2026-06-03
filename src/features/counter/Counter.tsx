import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { increment, decrement, incrementByAmount } from '../../store/slices/counterSlice';
import { Plus, Minus, Zap } from 'lucide-react-native';
import CustomButton from '../../components/CustomButton';

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modern Counter</Text>
      
      <View style={styles.counterBox}>
        <Text style={styles.countText}>{count}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton 
          onPress={() => dispatch(decrement())}
          type="danger"
          icon={Minus}
          style={styles.actionButton}
        />

        <CustomButton 
          onPress={() => dispatch(increment())}
          type="primary"
          icon={Plus}
          style={styles.actionButton}
        />
      </View>

      <CustomButton 
        title="Boost +10"
        onPress={() => dispatch(incrementByAmount(10))}
        type="secondary"
        icon={Zap}
        style={styles.boostButton}
        iconColor="#fbbf24"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    backgroundColor: '#1a1a1a',
    borderRadius: 30,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 25,
    letterSpacing: 0.5,
  },
  counterBox: {
    backgroundColor: '#262626',
    paddingHorizontal: 45,
    paddingVertical: 25,
    borderRadius: 20,
    marginBottom: 35,
    minWidth: 140,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#404040',
  },
  countText: {
    fontSize: 56,
    fontWeight: '900',
    color: '#3b82f6',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 20,
  },
  actionButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  boostButton: {
    width: '100%',
    marginTop: 10,
  },
});

export default Counter;
