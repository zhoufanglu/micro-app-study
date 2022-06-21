export function useNaiveTheme() {
  const themeOverrides = {
    common: {
      // primaryColor: '#18A058FF',
      primaryColor: 'red',
      primaryColorHover: '#36AD6AFF',
      primaryColorPressed: '#0C7A43FF',
      primaryColorSuppl: '#36ad6a'
    }
  }
  return {
    themeOverrides
  }
}
