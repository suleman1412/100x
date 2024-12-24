import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Star from '../../assets/Star.png'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Share2 } from 'lucide-react';
import { Play } from 'lucide-react';
const FavoriteCard = () => {
    
    return (
    <Card className="w-[30rem]">
        <CardHeader>
            <CardTitle className="text-3xl font-montserrat">
                <img 
                    src={Star} 
                    alt="star" 
                    className="w-[35%] rounded-lg my-3"/>
                <h1 className="">
                    Favorite
                </h1>
            </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
            <div className=" flex gap-5 text-[0.75rem] items-center font-helvetica pl-6 pb-3">
                <div>Suleman</div>
                <div>19 questions</div>
                <Select>
                    <SelectTrigger className="w-[8rem] text-[0.75rem] border-transparent font-helvetica">
                        <SelectValue placeholder="Privacy"/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Public">Public</SelectItem>
                        <SelectItem value="Private">Private</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </CardContent>
        <div className="flex gap-2 pl-6">
            <Button className="rounded-3xl font-medium"><Play fill="black"/> Practice</Button>
            <Button className="rounded-full w-10 h-10 flex items-center justify-center" variant="secondary">
                <Share2 className="w-2 h-2"/>
            </Button>
        </div>

        <Separator className=""/>
    </Card>
    )
}

export default FavoriteCard
