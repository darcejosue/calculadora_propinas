import { useMemo } from 'react';
import { formatCurrency } from '../helpers';
import type { TOrderItem } from '../types'

type OrderTotalProps = {
    order: TOrderItem[],
    setOrder: React.Dispatch<React.SetStateAction<TOrderItem[]>>,
    tip: number,
}

export const OrderTotal = ({ order, setOrder, tip }: OrderTotalProps) => {
    const subTotal = useMemo(() => 
    order.reduce((total, item) => (total + (item.quantity * item.price)), 0),
    [order]);

    const tipPercenrage = useMemo(()=>tip*subTotal,[tip, order]);

    const total = useMemo(()=>(subTotal+tipPercenrage),[tip,order]);

    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y Propina:</h2>
                <p>Subtotal a pagar: {' '}
                    <span className="font-bold">{formatCurrency(subTotal)}</span>
                </p>
                <p>Propina: {' '}
                    <span className="font-bold">{formatCurrency(tipPercenrage)}</span>
                </p>
                <p>Total a pagar: {' '}
                    <span className="font-bold">{formatCurrency(total)}</span>
                </p>
            </div>
            <button className='bg-green-600 w-96 py-2 rounded-xl text-white font-black hover:bg-green-400'
            disabled={subTotal ===0}
            onClick={()=>setOrder([])}
            >Pagar</button>
        </>
    )
}
