import {useState} from 'react'

import Header from './components/Header'
import LandingSection from './components/LandingSection'
import FeaturesSection from './components/FeaturesSection'

import LanguageContext from './context'

const App = () => {
  const [activeLanguage, changeLanguage] = useState('EN')

  return (
    <LanguageContext.Provider
      value={{
        activeLanguage,
        changeLanguage,
      }}
    >
      <Header />
      <LandingSection />
      <FeaturesSection />
    </LanguageContext.Provider>
  )
}

export default App
