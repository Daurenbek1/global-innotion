import { useState, useEffect } from 'react';
import NewsService from '../../API/NewsService';
import classes from './main-new.module.css'

const MainNew = () => {
  const [mainNew, setMainNew] = useState({});

  function getLimitedString(text, maxLength, isBeautifulEnding = true) {
    if (text.length <= maxLength) {
      return text;
    }

    let limitedString = text.toString().substring(0, maxLength)

    if (isBeautifulEnding) {
      let lastSymbolsAfterSpace = limitedString.split(" ").slice(-1)[0];

      const isManyLastSymbols = (
        lastSymbolsAfterSpace.length === limitedString.length ||
        lastSymbolsAfterSpace.length >= limitedString.length / 2
      );
      if (isManyLastSymbols) {
        return `${limitedString}...`;
      }

      const lengthLimitedString = limitedString.length;
      const lengthLastSymbolsAndSpace = lastSymbolsAfterSpace.length + 1;
      const maxLengthForBeautifulText = lengthLimitedString - lengthLastSymbolsAndSpace;

      const limitedStringWithoutLastSymbols = limitedString.substring(0, maxLengthForBeautifulText);
      return `${limitedStringWithoutLastSymbols}...`;
    }

    return `${limitedString}...`;
  }

  async function getMainNew() {
    const photos = await NewsService.getPhotos();
    const posts = await NewsService.getPosts();

    const randomId = Math.floor(Math.random() * 10);

    const _mainNew = {
      imageUrl: photos[randomId].url,
      ...posts[randomId]
    }

    setMainNew(_mainNew)
  }

  useEffect(() => {
    getMainNew();
  }, []);


  return (
    <div>
      <h3 className={classes.mainTitle}>Главный</h3>
      {Object.keys(mainNew).length > 0 &&
          <div className={classes.main}>
            <img className={classes.img} src={mainNew.imageUrl} alt={mainNew.imageUrl} />
            <div className={classes.content}>
              <h3 className={classes.title}>{mainNew.title}</h3>
              <p className={classes.descr}>{getLimitedString(mainNew.body, 100)}</p>
            </div>
          </div>
      }
    </div>
  );
}

export default MainNew;
