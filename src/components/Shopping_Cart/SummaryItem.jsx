/* eslint-disable react/prop-types */
//exporta un componente funcional llamado SummaryItem
export default function SummaryItem ({qty, prod}){
    
    return <div className="summary__item">
        <p>{prod.name} {"("}$ {(prod.price).toFixed(2)} x {qty}{")"}</p>  
        <p>${(prod.price * qty).toFixed(2)}</p>
    </div>
}