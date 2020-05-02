import React, {useState} from "react";
import styles from './forms.module.css'

type CreateCommentProps = {
    createComment: Function
}

const CreateComment: React.FC<CreateCommentProps> = ({createComment}) => {

    const [text, changeText] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const create = () => {
        if (text !== '') {
            createComment(text);
            changeText('');
            setSuccess(true);
            setError(false);
        } else {
            setSuccess(false);
            setError(true);
        }
    };

    const succ = success === true ? <div className={styles.success}>The post created successful</div> : "";
    const err = error === true ? <div className={styles.error}>Something went wrong</div> : "";
    return <div className={styles.formWrapper}>
        <div>
            <label htmlFor="title-input">Send comment</label>
            <input id="title-input" className={styles.inputForm} value={text} onChange={e => changeText(e.target.value)}
                   type="text"/>
            {err}
            {succ}
        </div>
        <div className={styles.btnWrapper}>
            <button className={styles.btnForm} onClick={create}>Send</button>
        </div>
    </div>
};
export default CreateComment;
