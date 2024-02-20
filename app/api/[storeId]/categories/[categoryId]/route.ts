import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function GET (
     req:Request,
     { params }: {params: {CategoryId: string } }
){
     try{
          if (!params.CategoryId){
               return new NextResponse("Category Id is required", { status: 400})
          }
          const category = await prismadb.category.findUnique({
               where: {
                    id: params.CategoryId,
               }
          })
          return NextResponse.json(category)
     }catch (error){
          console.log('[CATEGORY_GET]', error);
          return new NextResponse("Internal Error", { status: 500 })
     }
}
export async function PATCH (
     req:Request,
     { params }: {params: {storeId: string , categoryId: string} }
){
     try{
          const { userId } = auth()
          const body = await req.json();

          const { name , billboardId } = body
          
          if(!userId){
               return new NextResponse("Unauthenticated user", { status: 401})
          }
          if (!name){
               return new NextResponse("Category Must have a name", { status: 400})
          }
          if (!billboardId){
               return new NextResponse("Category Must have a billboardId", { status: 400})
          }
          if (!params.categoryId){
               return new NextResponse("Category Must have a Id", { status: 400})
          }
          const storeByUserId = await prisma?.store.findFirst({
               where: {
                    id: params.storeId,
                    userId
               }
          })
          if (!storeByUserId){
               return new NextResponse("Unauthorised" , {status:400});
          }
          const category = await prismadb.category.updateMany({
               where: {
                    id: params.categoryId,
               },
               data:{
                    name,
                    billboardId
               }
          })
          return NextResponse.json(category)
     }catch (error){
          console.log('[CATEGORY_PATCH]', error);
          return new NextResponse("Internal Error", { status: 500 })
     }
}
export async function DELETE (
     req:Request,
     { params }: {params: {storeId: string, categoryId: string } }
){
     try{
          const { userId } = auth()
          
          if(!userId){
               return new NextResponse("Unauthorised user", { status: 401})
          }

          if (!params.categoryId){
               return new NextResponse("Category Id is required", { status: 400})
          }
          const storeByUserId = await prisma?.store.findFirst({
               where: {
                    id: params.storeId,
                    userId
               }
          })
          if (!storeByUserId){
               return new NextResponse("Unauthorised" , {status:400});
          }
          const category = await prismadb.category.deleteMany({
               where: {
                    id: params.categoryId,
               }
          })
          return NextResponse.json(category)
     }catch (error){
          console.log('[CATEGORY_DELETE]', error);
          return new NextResponse("Internal Error", { status: 500 })
     }
}