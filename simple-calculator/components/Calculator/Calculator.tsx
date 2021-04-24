import React,{ useState } from 'react';
import style from './Calculator.module.css';

export const Calculator: React.FunctionComponent = () => {
    return (
      <section className={style.calculator}>
        <div className={style.screen}>
           <div className={style.historyScreen}>
				0.00
		   </div>
		   <div className={style.resultScreen}>
		   		0.00
		   </div>
        </div>
        <div className={style.rows}>
			<div className={style.keyItems}>
				C
			</div>
			<div className={style.keyItems}>
				x
			</div>
			<div className={style.keyItems}>
				÷
			</div>
			<div className={style.keyItems}>
				←
			</div>
        </div>
        <div className={style.rows}>
			<div className={style.keyItems}>
				7
			</div>
			<div className={style.keyItems}>
				8
			</div>
			<div className={style.keyItems}>
				9
			</div>
			<div className={style.keyItems}>
				-
			</div>
        </div>
        <div className={style.rows}>
			<div className={style.keyItems}>
				4
			</div>
			<div className={style.keyItems}>
				5
			</div>
			<div className={style.keyItems}>
				6
			</div>
			<div className={style.keyItems}>
				+
			</div>
        </div>
        <div className={style.rows}>
			<div className={style.keyItems}>
				1
			</div>
			<div className={style.keyItems}>
				2
			</div>
			<div className={style.keyItems}>
				3
			</div>
			<div className={style.keyItems}>
				%
			</div>
        </div>
        <div className={style.rows}>
			<div className={style.keyItems}>
				0
			</div>
			<div className={style.keyItems}>
				.
			</div>
			<div className={style.keyItems}>
				√
			</div>
			<div className={style.equalKeyItems}>
				=
			</div>
        </div>
		<div className={style.copyRights}>
			© 2021 -  Licence MIT
		</div>
      </section>
    );
};
