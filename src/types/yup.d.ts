 
import { MixedSchema, StringSchema } from 'yup'

declare module 'yup' {
    interface MixedSchema {
        containsDigitAndUppercase(value: string): MixedSchema,
        eightOrMore(value: string): MixedSchema,
        checked(value: string): MixedSchema,
    }

    interface StringSchema {
        notZero(value: string): StringSchema,
    }
}
