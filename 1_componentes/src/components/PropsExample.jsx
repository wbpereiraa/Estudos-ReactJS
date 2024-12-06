import PropTypes from 'prop-types';

const PropsExample = ({nome, idade}) => {
  return (
    <div>
        <h3>Olá {nome}</h3>
        <p>Eu tenho {idade} anos.</p>
    </div>
  );
};
PropsExample.propTypes = {
  nome: PropTypes.string.isRequired,
  idade: PropTypes.number.isRequired,
};

export default PropsExample;