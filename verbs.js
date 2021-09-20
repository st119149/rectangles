const combine = (verb, pronoun) => {
    const exeptionsFirst = ['брить', 'стелить'];
    const exeptionsSecond = ['гнать', 'держать', 'терпеть', 'обидеть', 'видеть', 'слышать', 'ненавидеть', 'зависеть', 'вертеть', 'дышать', 'смотреть'];
  
    // выявление спряжения глагола (проверка ударений, исключений и т.д.)
    const letter = verb.toLowerCase().slice(-3, -2);
    let conjugation;
    if (exeptionsFirst.includes(verb)) 
      conjugation = 1;
    else if (exeptionsSecond.includes(verb)) 
      conjugation = 2;
    else if (letter === 'и') 
      conjugation = 2;
    else 
      conjugation = 1;
      
    const newVerb = verb.slice(0, -3);
  
    switch (pronoun.toLowerCase()) {
      case 'я':
        return [newVerb + 'ю', newVerb + 'у'];
      case 'мы':
        return conjugation === 1 ? 
        newVerb + 'ем' : 
        newVerb + 'им';
  
      case 'ты':
        return conjugation === 1 ? 
        newVerb + 'ешь' : 
        newVerb + 'ишь';
      case 'вы':
        return conjugation === 1 ? 
        newVerb + 'ете' : 
        newVerb + 'ите';
  
      case 'он':
      case 'она':
      case 'оно':
        return conjugation === 1 ? 
        newVerb + 'ет' : 
        newVerb + 'ит';
      case 'они':
        return conjugation === 1 ? 
        [newVerb + 'ут', newVerb + 'ют'] : 
        [newVerb + 'ат', newVerb + 'ят'];
      default:
        throw new Error('Несуществующее местоимение');
    }
  };
  
  console.log(combine('держать', 'он'))
  
  //второй вариант, с api словаря
  const fetchAndCombine = async (verb, pronoun) => {
    //const verbs = await fetchVerbs(verb.toLowerCase()); // массив глаголов из словаря по переданному инфинитив
    const verbs = ['слышу', 'слышим', 'слышишь', 'слышите', 'слышит', 'слышат'];
  
    switch (pronoun.toLowerCase()) {
      case 'я':
        return verbs.find(item => item.slice(-1) === 'ю' || item.slice(-1) === 'у');
      case 'мы':
        return verbs.find(item => item.slice(-2) === 'ем' || item.slice(-2) === 'им');
  
      case 'ты':
        return verbs.find(item => item.slice(-3) === 'ешь' || item.slice(-3) === 'ишь');
      case 'вы':
        return verbs.find(item => item.slice(-3) === 'ете' || item.slice(-3) === 'ите');
  
      case 'он':
      case 'она':
      case 'оно':
        return verbs.find(item => item.slice(-2) === 'ет' || item.slice(-2) === 'ит');
  
      case 'они':
        return verbs.find(
          item =>
            item.slice(-2) === 'ут' ||
            item.slice(-2) === 'ют' ||
            item.slice(-2) === 'ат' ||
            item.slice(-2) === 'ят'
        );
      default:
        throw new Error('Несуществующее местоимение');
    }
  };
  
  fetchAndCombine('слышать', 'они').then(res => console.log(res)).catch(err => console.log(err))
  
  