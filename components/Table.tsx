import { CheckIcon } from '@heroicons/react/solid'
import { Product } from '@stripe/firestore-stripe-payments'
import React from 'react'

interface Props{
    products: Product[]
    selectedplan: Product | null
}

function Table({ products, selectedplan }: Props) {
  return (
    <table>
        <tbody className='divide-y divide-[gray]'>
            <tr className='tableRow'>
                <td className='tableDataTitle'>Monthly price</td>
                {products.map((product)=>(
                   <td
                   className={`tableDataFeature ${
                     selectedplan?.id === product.id
                       ? 'text-[#E50914]'
                       : 'text-[gray]'
                   }`}
                   key={product.id}
                 >${(product.prices[0].unit_amount!/100).toFixed(2)}</td>
                ))}
            </tr>
            <tr className="tableRow">
          <td className="tableDataTitle">Video quality</td>
          {products.map((product) => (
            <td
              className={`tableDataFeature ${
                selectedplan?.id === product.id
                  ? 'text-[#E50914]'
                  : 'text-[gray]'
              }`}
              key={product.id}
            >
              {product.metadata.videoQuality}
            </td>
          ))}
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">Resolution</td>
          {products.map((product) => (
            <td
              className={`tableDataFeature ${
                selectedplan?.id === product.id
                  ? 'text-[#E50914]'
                  : 'text-[gray]'
              }`}
              key={product.id}
            >
              {product.metadata.resolution}
            </td>
          ))}
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">
            Watch on your TV, computer, mobile phone and tablet
          </td>
          {products.map((product) => (
            <td
              className={`tableDataFeature ${
                selectedplan?.id === product.id
                  ? 'text-[#E50914]'
                  : 'text-[gray]'
              }`}
              key={product.id}
            >
              {product.metadata.portability === 'true' && (
                <CheckIcon className="inline-block h-8 w-8" />
              )}
            </td>
          ))}
        </tr>
        </tbody>
    </table>
  )
}

export default Table