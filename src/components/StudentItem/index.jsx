import s from './style.module.sass';

export default function StudentItem({name, score, level}){
  return(
    <div className={s.studentItem}>
      <h2>{name}</h2>
      <h2>{score}</h2>
      <h2>{level}</h2>
    </div>
  )
}