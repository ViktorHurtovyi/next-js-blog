import React, {useState} from "react";
import styles from './forms.module.css'

type CreateArticleProps = {
    createArticle: Function
}

const CreateArticle: React.FC<CreateArticleProps> = ({createArticle}) => {

    const [title, changeTitle] = useState('');
    const [body, changeBody] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const create = () => {
        if (title !== '' && body !== ''){
            createArticle(title, body);
            changeTitle('');
            changeBody('');
            setSuccess(true);
            setError(false);
        }else{
            setSuccess(false);
            setError(true);
        }
    };

    const succ = success===true?<div className={styles.success}>The post created successful</div>:"";
    const err = error===true?<div className={styles.error}>Something went wrong</div>:"";

    return <div className={styles.formWrapper}>
        <div className={styles.groupWrapper}>
            <label htmlFor="title-input">Title</label>
            <input id="title-input" className={styles.inputForm} value={title} onChange={e => changeTitle(e.target.value)} type="text"/>
        </div>
        <div className={styles.groupWrapper}>
            <label htmlFor="title-input">Body</label>
            <textarea value={body} onChange={e => changeBody(e.target.value)} className={styles.textAreaForm && styles.inputForm} />
            {err}
            {succ}
        </div>
        <button className={styles.btnForm} onClick={create}>Create</button>
    </div>
};
export default CreateArticle;
