import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { uid } from 'uid';
import useMarvelService from '../../services/MarvelServices';
import setContent from '../../utils/setContent';

import './charInfo.scss';

const CharInfo = (props) => {
  const [char, setChar] = useState(null);
  const { loading, error, getCharacter, clearError, process, setProcess } =
    useMarvelService();

  useEffect(() => {
    updateChar();
  }, [props.charId]);

  const updateChar = () => {
    clearError();
    const { charId } = props;
    if (!charId) {
      return;
    }
    getCharacter(charId)
      .then(onCharLoaded)
      .then(() => setProcess('confirmed'));
  };

  const onCharLoaded = (char) => {
    setChar(char);
  };

  return <div className='char__info'>{setContent(process, View, char)}</div>;
};

const View = ({ data }) => {
  const { name, description, thumbnail, homepage, wiki, comics } = data;

  let imgStyle = { objectFit: 'cover' };
  if (
    thumbnail ===
    'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
  ) {
    imgStyle = { objectFit: 'contain' };
  }

  const сomicsArray = ViewList(comics);

  return (
    <>
      <div className='char__basics'>
        <img
          src={thumbnail}
          alt={name}
          style={imgStyle}
        />
        <div>
          <div className='char__info-name'>{name}</div>
          <div className='char__btns'>
            <a
              href={homepage}
              className='button button__main'
              target='blank'
            >
              <div className='inner'>homepage</div>
            </a>
            <a
              href={wiki}
              className='button button__secondary'
              target='blank'
            >
              <div className='inner'>Wiki</div>
            </a>
          </div>
        </div>
      </div>
      <div className='char__descr'>{description}</div>
      <div className='char__comics'>Comics:</div>
      <ul className='char__comics-list'>{сomicsArray}</ul>
    </>
  );
};

const ViewList = (arr) => {
  if (arr.length === 0) {
    return 'There is no comics with this character';
  } else {
    return arr.map((item) => {
      const key = uid();
      return (
        <li
          key={key}
          className='char__comics-item'
        >
          {item.name}
        </li>
      );
    });
  }
};

CharInfo.propTypes = {
  charId: PropTypes.number,
};
View.propTypes = {
  data: PropTypes.object,
};

export default CharInfo;
