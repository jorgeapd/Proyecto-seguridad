import Link from 'next/link';

import { Title } from '@/components';
import { initialData } from '@/seed/seed';
import Image from 'next/image';
import clsx from 'clsx';
import { IoCardOutline } from 'react-icons/io5';
import { getOrderById } from '@/actions/order/get-order-by-id';
import { redirect } from 'next/navigation';
import { currencyFormat } from '@/utils';


const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];


interface Props {
  params: {
    id: string;
  };
}


export default async function OrdersByIdPage({ params }: Props) {

  const { id } = params;

  //Todo: LLamar el server action

  const { ok, order } = await getOrderById(id);

  if (!ok) {
    redirect('/')
  }

  const address = order!?.OrderAddress;



  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">

      <div className="flex flex-col w-[1000px]">

        <Title title={`Orden #${id.split('-').at(-1)}`} />


        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

          {/* Carrito */}
          <div className="flex flex-col mt-5">

            <div className={
              clsx(
                "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                {
                  'bg-yellow-500': !order!.isPaid,
                  'bg-green-700': !order!.isPaid,
                }
              )
            }>
              <IoCardOutline size={30} />
              {/* <span className="mx-2">Pendiente de pago</span> */}
              <span className="mx-2">
                {order?.isPaid ? "Pagada" : "En proceso de pago ..."}
              </span>
            </div>



            {/* Items */}
            {order!.OrderItem.map((item) => (
              <div
                key={item.product.slug + "-" + item.size}
                className="flex mb-5"
              >
                <Image
                  src={`/products/${item.product.ProductImage[0].url}`}
                  width={100}
                  height={100}
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                  alt={item.product.title}
                  className="mr-5 rounded"
                />

                <div>
                  <p>{item.product.title}</p>
                  <p>
                    ${item.price} x {item.quantity}
                  </p>
                  <p className="font-bold">
                    Subtotal: {currencyFormat(item.price * item.quantity)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Datos de Transferencia Bancaria */}
          <div className="mt-10 bg-white p-5 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Datos para Transferencia Bancaria</h3>
            <p><strong>Banco:</strong> Banco Estado</p>
            <p><strong>Titular:</strong> Mason security spa</p>
            <p><strong>RUT:</strong> 77.096.356-7</p>
            <p><strong>Tipo Cuenta:</strong> Cuenta Corriente</p>
            <p><strong>Nro Cuenta</strong> 2350-0250-089 </p>
            <p><strong>Correo:</strong> contacto@capacitacionmasonchile.cl</p>
            <div>
              <Image
                src="/imgs/LogoBancoEstado.png" 
                width={200}
                height={200}
                alt="Logo del Banco"
                className="mr-4"
              />

            </div>
            <div className="mt-5">
            <p><strong>Su orden de compra se ha generado correctamente. Ahora debe transferir a la Cta bancaria para validar el pago y lo contactaremos por Whatsapp para confirmar su compra.</strong></p>
            </div>
          </div>

          {/* Checkout - Resumen de orden */}
          <div className="bg-white rounded-xl shadow-xl p-7">
            <h2 className="text-2xl mb-2">Dirección de entrega</h2>
            <div className="mb-10">
              <p className="text-xl">
                {address!.firstName} {address!.lastName}
              </p>
              <p>{address!.address}</p>
              <p>{address!.address2}</p>
              <p>
                {address!.city}, {address!.countryId}
              </p>
              <p>{address!.phone}</p>
            </div>

            {/* Divider */}
            <div className="w-full h-0.5 rounded bg-gray-200 mb-10" />


            <h2 className="text-2xl mb-2">Resumen de orden</h2>

            <div className="grid grid-cols-2">

              <span>No. Productos</span>
              <span className="text-right">
                {order?.itemsInOrder === 1
                  ? "1 artículo"
                  : `${order?.itemsInOrder} artículos`}
              </span>

              <span>Subtotal</span>
              <span className="text-right">
                {currencyFormat(order!.subTotal)}
              </span>

              <span>IVA (19%)</span>
              <span className="text-right">{currencyFormat(order!.tax)}</span>

              <span className="mt-5 text-2xl">Total:</span>
              <span className="mt-5 text-2xl text-right">
                {currencyFormat(order!.total)}
              </span>


            </div>

            <div className="mt-5 mb-2 w-full">

              <div className={
                clsx(
                  "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                  {
                    'bg-yellow-500': !order!.isPaid,
                    'bg-green-700': !order!.isPaid,
                  }
                )
              }>
                <IoCardOutline size={30} />
                {/* <span className="mx-2">Pendiente de pago</span> */}
                <span className="mx-2">
                  {order?.isPaid ? "Pagada" : "En proceso de pago ..."}
                </span>
              </div>

            </div>


          </div>



        </div>



      </div>


    </div>
  );
}