"use client";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import {Modal} from "@/components/ui/modal"

const SetupPage = () => {
     return (
       <div className = "p-4" >
          <Modal 
            title = "Test"
            description = "This is a test "
            isOpen={true} 
            onClose ={()=>{}}
          >
            Children
          </Modal>
       </div>
     );
}

export default SetupPage;
   