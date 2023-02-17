// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { data } from 'autoprefixer'
import { emailOptions, transporter } from 'src/utils/nodemailer'
import { FormDataType } from 'src/hooks/useSendOrder'

type Data = {
  message: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === 'POST') {
    const data: FormDataType = req.body

    try {
      await transporter.sendMail({
        ...emailOptions,
        subject: 'Nova narudžba',
        html: `
        <p>Ime: ${data.firstName}</p> 
        <p>prezime: ${data.lastName}</p> 
        <p>Broj telefona: ${data.phoneNumber}</p> 
        <p>Email: ${data.email}</p> 
        <p>Adresa stanovanja: ${data.address}</p> 
        <p>Grad: ${data.city}</p> 
        <p>Poštanski broj: ${data.postCode}</p>
        
        <p>Vina:</p>
        <div>        
          ${data.wines.map(wine => {
            return `
            <div>
              <span>${wine.name} ${wine.age} ${wine.type} ${
              wine.variety ? `| ${wine.variety}` : ''
            }</span><br/>     
              <span>
                Količina: ${wine.quantity}
              </span>       
            </div>
            
            `
          })}
        </div>
        `
      })

      res.status(200).json({ message: 'Success!' })
    } catch (error: any) {
      console.log(error)
      return res.status(400).json({ message: error.message as string })
    }
  }
  res.status(400).json({ message: 'Bad Request' })
}

export default handler
