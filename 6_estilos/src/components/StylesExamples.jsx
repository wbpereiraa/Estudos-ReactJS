import "./StylesExamples.css";

import styles from "./StylesExamples.module.css";

const StylesExamples = () => {

    // inline

    const inlineStyle = {
        color: 'red',
        fontSize: '24px',
        backgroundColor: 'black',
        padding: '20px',
        };
  return (
    <div>
        <h2 style={inlineStyle}>Estilos inline</h2>

        {/* arquivo de estilo */}
        <p className="text">Meu CSS</p>

        {/* CSS Modules */}
        <p className={styles.textPurple}>Meu CSS Modules</p>
    </div>
  )
}

export default StylesExamples