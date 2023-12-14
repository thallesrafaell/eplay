import { useParams } from 'react-router-dom'

const Product = () => {
  const { id } = useParams()

  return (
    <div>
      <p>PRODUTOS {id}</p>
    </div>
  )
}
export default Product
