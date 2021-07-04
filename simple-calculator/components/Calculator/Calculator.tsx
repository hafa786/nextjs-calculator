import React,{ useState } from 'react';
import style from './Calculator.module.css';

const OPERATOR_LIST = ["+",	"-","%","/","*" ];

export const Calculator: React.FunctionComponent = () => {
	const [firstValue, setFirstValue] = useState<string>('0.00');
	const [secondValue, setSecondValue] = useState<string>('0.00');
	const [operatorFlag, setOperatorFlag] = useState<boolean>(false);
	const [operator, setOperator] = useState<string>('');
	const [histroy, setHistory] = useState<string>();
	const [results, setResults] = useState<string>('0.00');
	const handleKeys = (value: string) => {
		if(operator !== '') {
			if (secondValue === '0.00') {
				setSecondValue(value);
				setResults(results.concat(value).toString());
			} else {
				setSecondValue(secondValue.concat(value));
				setResults(results.concat(value).toString());
			}
			// setResults(firstValue + operator + secondValue);
		} else {
			if (firstValue === '0.00') {
				setFirstValue(value);
				setResults(value.toString());
			} else {
				setFirstValue(firstValue.concat(value));
				setResults(firstValue.concat(value).toString());
			}
			
		}
		
	};
	const handleOperator = (val: string) => {
		setOperator(val);
		setResults(firstValue + val)
		// if (secondValue !== '0') {
		// 	setSecondValue(secondValue.concat(val));
		// }
		//setResults(firstValue + operator + secondValue)
	};
	const handleCalculation = () => {
		var fVal = parseFloat(firstValue);
		var sVal = parseFloat(secondValue);
		console.log(fVal, sVal);
		switch(operator)  {
			case '+':
				var res = fVal + sVal
				setResults(res.toString());
		}
	};
	const clearedValues = () => {
		setFirstValue('');
		setSecondValue('');
		setOperator('');
		setResults('0.00')
	};
    return (
      <section className={style.calculator}>
        <div className={style.screen}>
			{/* {firstValue} - {secondValue} */}
           <div className={style.historyScreen}>
				{histroy}
		   </div>
		   <div className={style.resultScreen}>
		   		{results}
		   </div>
        </div>
        <div className={style.rows}>
			<div className={style.keyItems} onClick={() => clearedValues()}>
				c
			</div>
			<div className={style.keyItems} onClick={() => handleOperator('*')}>
				x
			</div>
			<div className={style.keyItems} onClick={() => handleOperator('/')}>
				÷
			</div>
			<div className={style.keyItems}>
				←
			</div>
        </div>
        <div className={style.rows}>
			<div className={style.keyItems} onClick={() => handleKeys('7')}>
				7
			</div>
			<div className={style.keyItems} onClick={() => handleKeys('8')}>
				8
			</div>
			<div className={style.keyItems} onClick={() => handleKeys('9')}>
				9
			</div>
			<div className={style.keyItems} onClick={() => handleOperator('-')}>
				-
			</div>
        </div>
        <div className={style.rows}>
			<div className={style.keyItems} onClick={() => handleKeys('4')}>
				4
			</div>
			<div className={style.keyItems} onClick={() => handleKeys('5')}>
				5
			</div>
			<div className={style.keyItems} onClick={() => handleKeys('6')}>
				6
			</div>
			<div className={style.keyItems} onClick={() => handleOperator('+')}>
				+
			</div>
        </div>
        <div className={style.rows}>
			<div className={style.keyItems} onClick={() => handleKeys('1')}>
				1
			</div>
			<div className={style.keyItems} onClick={() => handleKeys('2')}>
				2
			</div>
			<div className={style.keyItems} onClick={() => handleKeys('3')}>
				3
			</div>
			<div className={style.keyItems} onClick={() => handleOperator('%')}>
				%
			</div>
        </div>
        <div className={style.rows}>
			<div className={style.keyItems} onClick={() => handleKeys('0')}>
				0
			</div>
			<div className={style.keyItems} onClick={() => handleKeys('.')}>
				.
			</div>
			<div className={style.keyItems}>
				√
			</div>
			<div className={style.equalKeyItems} onClick={() => handleCalculation()} >
				=
			</div>
        </div>
		<div className={style.copyRights}>
			© 2021 -  Licence MIT
		</div>
      </section>
    );
};
