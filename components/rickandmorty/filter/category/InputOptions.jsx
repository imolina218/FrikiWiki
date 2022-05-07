import styles from '../../../../styles/Rickandmorty.module.css'

const InputOptions = ({ total, name, setId, option }) => {
    return (
        <div>
            <select 
                name="input" 
                id={name}
                onChange={ e => setId(e.target.value) }
            >
                <option value="1"> Choose {option} </option>

                {[...Array(total).keys()].map( ep => {
                    return (
                        <option 
                            key={ep + 1} 
                            value={ep + 1}
                        >{name} - {ep + 1}</option>
                    )
                })}

            </select>
        </div>
    )
}

export default InputOptions