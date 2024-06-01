import { COLLECTIONS, connect } from '@/app/api/db'
import {z} from 'zod'

const paymentSchema = z.object({
    amount: z.number(),
    title: z.string(),
    category: z.string(),
    date: z.date(),
    type: z.string()
})

type PaymentT = z.infer<typeof paymentSchema>
class Payments {
    
    static async createNewPayment(newPaymentData: PaymentT) {
        paymentSchema.parse(newPaymentData)
        const {db} = await connect()
        // db.collection()
    }
}
