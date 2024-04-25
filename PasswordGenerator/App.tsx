import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'

// Form Validation
import * as Yup from 'yup'

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
  .min(4, 'It should be at least of 4 length')
  .max(18, 'It should have max 18 characters')
  .required( 'Length is required')
})

export default function App() {

  const [password, setPassword] = useState('')
  const [isPassGenerated, setIsPassGenerated] = useState(false)

  const [lowerCase, setLowerCase] = useState(true)
  const [upperCase, setUpperCase] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)

  const generatePasswordString = (passwordLength: number) => {
    let characterList = ''

    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz'
    const digitChars = '0123456789'
    const specialChars = '!@#$%^&*()_+'

    if(lowerCase) characterList += lowerCaseChars
    if(upperCase) characterList += upperCaseChars
    if(numbers)   characterList += digitChars
    if(symbols)   characterList += specialChars

    const passwordResult = createPassword(characterList, passwordLength)

    setPassword(passwordResult)
    setIsPassGenerated(true)


  }

  const createPassword = (characters: string, passwordLength: number) => {
    let result = ''
    for(let i=0; i<passwordLength; i++){
      const characterIndex = Math.round(Math.random() * characters.length)
      result += characters.charAt(characterIndex)
    }
    // console.log("hey")
    return result
   
  }

  const resetPasswordState = () => {
    setPassword('')
    setIsPassGenerated(false)
    setUpperCase(false)
    setLowerCase(true)
    setNumbers(false)
    setSymbols(false)
  }

  return (
    <View>
      <Text>Hey </Text>
    </View>
  )
}

const styles = StyleSheet.create({})