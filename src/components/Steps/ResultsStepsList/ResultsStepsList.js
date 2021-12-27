import './results-steps__list.css';
import PropTypes from 'prop-types';

function ResultsStepsList({ results, handleRemove, handleEdit }) {
  return (
    <ul className={'results-steps__list'}>
      {results.map((result) =>
        <li className={'steps-columns'} key={result.date}>
          <div className={'steps-columns__column-1'}>{result.date}</div>
          <div className={'steps-columns__column-2'}>{result.distance}</div>
          <div className={'steps-columns__column-3 results-steps__actions'}>
            <button
              className={'results-steps__btn results-steps__btn-edit'}
              onClick={() => handleEdit(result)}>
              <span className={'_visually-hidden'}>Редактировать</span>
            </button>
            <button
              className={'results-steps__btn results-steps__btn-remove'}
              onClick={() => handleRemove(result.date)}>
              <span className={'_visually-hidden'}>Удалить</span>
            </button>
          </div>
        </li>
      )}
    </ul>
  )
}

ResultsStepsList.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
}

ResultsStepsList.defaultProps = {
  results: [],
}

export default ResultsStepsList;