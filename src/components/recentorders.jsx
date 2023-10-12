import React from 'react'
import { Link } from 'react-router-dom'

const recentOrderData = [
{
    id: '1',
    customer_name: 'Ragunathan',
    customer_mob: '9176081367',
    product: 'Apple IPhone 13 Pro Max',
    order_status: 'Success'
},
{
    id: '2',
    customer_name: 'Anita',
    customer_mob: '9025732416',
    product: 'Apple IPhone 12 Pro Max',
    order_status: 'Success' 
},
{
    id: '3',
    customer_name: 'Ijaz',
    customer_mob: '73583456421',
    product: 'Oneplus Nord CE 3',
    order_status: 'Success'
},
{
    id: '4',
    customer_name: 'Sairam',
    customer_mob: '9146233638',
    product: 'Apple IPhone 13 Pro Max',
    order_status: 'Success'
},
{
    id: '5',
    customer_name: 'Sharuk',
    customer_mob: '9176081356',
    product: 'Oppo A7 Series',
    order_status: 'Success'
}

]

function recentorders() {
return (
    <div className='bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1'>
    <strong>Recent Orders</strong>
    <div className='mt-3'>
        <table className='w-full text-gray-700 border border-gray-500 py-10'>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Mob No</td>
                    <td>Product</td>
                    <td>Status</td>
                </tr>
            </thead>
            
            <tbody>
               {recentOrderData.map((order) => (
                 
                 <tr key={order.id}>

                <td>
                    <Link to={`/order/${order.id}`}>{order.id}</Link>
                </td>

                <td>
                    <Link to={`/customer_name/${order.customer_name}`}>{order.customer_name}</Link>
                </td>

                <td>
                    <Link to={`/customer_mob/${order.customer_mob}`}>{order.customer_mob}</Link>
                </td>

                <td>{order.product}</td>

                <td>{order.order_status}</td>

                </tr>
               ))}
            </tbody>
        </table>
        </div>
    </div>
)
}

export default recentorders
