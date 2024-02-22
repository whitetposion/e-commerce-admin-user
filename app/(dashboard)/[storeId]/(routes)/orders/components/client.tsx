"use client"

import { useParams, useRouter } from "next/navigation"

import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import { OrderColumn, columns } from "./columns"
import { DataTable } from "@/components/ui/data-table"


interface OrdersClientProps {
     data: OrderColumn[]
}
export const OrdersClient: React.FC<OrdersClientProps> = ({
     data
})=> {
     const router = useRouter();
     const params = useParams();
     return (
          <>
               <Heading
                    title={`Billboard (${data.length})`}
                    description="Manange billboard for your store"
               />
               <Separator/>
               <DataTable columns={columns} data={data} searchKey="products"/>
          </>
     )
}
