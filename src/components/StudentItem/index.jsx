import s from './style.module.sass';

export default function StudentItem({name, score, level}){
  return(
    <div className={s.studentItem}>
      <h3>{name}</h3>
      <h3>
        <span>{level}</span>
        <span>{score}</span>
      </h3>
    </div>
  )
}