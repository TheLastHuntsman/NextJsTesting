'use client'

type buttonProps={
    elementID: string
    text: string

}

export default function ScrollButton({elementID, text}:buttonProps) {
    return(
        <button className="p-5 border uppercase"
        onClick={() => {
            const nextSection = document.getElementById(elementID)
    
            nextSection?.scrollIntoView({behavior:"smooth"})
          }}>
            {text}
          </button>


    )
}