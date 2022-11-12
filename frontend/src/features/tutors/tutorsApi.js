 const getTutors = async (baseURL) => {
  const response = await fetch(`${baseURL}/api/v1/tutors`)
  const result = await response.json()
  return result
}

export default getTutors;