const TopHead=()=>{

    const name=
        ["Vishal","Ram","Nitin","Sumit","Pawan"];

        const ans=name.map((key)=>{
            return(
                <>
                <li>Name: {key}</li>
                </>
            )
        })
    
    return(
        <>
        
        <h1>Tope head page</h1>

        {ans}
        </>
    )
}
export default TopHead;