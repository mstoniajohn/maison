import { useMutation } from "@tanstack/react-query"
import { GIFT_CARD_URLS } from "./urls"
import { toast } from "react-toastify"




const postSendGiftCardInEmail = async (code:string) => {
    try {
        const request = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${GIFT_CARD_URLS.SEND_GIFT_CARD}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({code})
            }
         )
        return request.json()
        
    } catch (error:any) {
        console.log(error)
        throw new Error(`Error sending gift card: ${error?.message || error}`)
        
    }

}

const usePostSendGiftCardInEmail = () => {
    const mutation = useMutation({
        mutationFn: postSendGiftCardInEmail,
    })
    return mutation
}
export {postSendGiftCardInEmail}
export default usePostSendGiftCardInEmail