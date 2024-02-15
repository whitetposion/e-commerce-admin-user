"use client";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import {Modal} from "@/components/ui/modal"
import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

const SetupPage = () => {
  const onOpen = useStoreModal((state)=>state.onOpen);
  const isOpen = useStoreModal((state)=>state.isOpen);
  useEffect(()=>{
    if(!isOpen){
      onOpen();
    }
  },[isOpen])
     return (
       <div className = "p-4" >
          Root page
       </div>
     );
}

export default SetupPage;
   