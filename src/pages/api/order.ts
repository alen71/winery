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
        <p>Ime: ${data.firstName}</p> <br/>
        <p>prezime: ${data.lastName}</p> <br/>
        <p>Broj telefona: ${data.phoneNumber}</p> <br/>
        <p>Email: ${data.email}</p> <br/>
        <p>Adresa stanovanja: ${data.address}</p> <br/>
        <p>Grad: ${data.city}</p> <br/>
        <p>Poštanski broj: ${data.postCode}</p>
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
