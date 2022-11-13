import {
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  Input,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

export default function SearchDropdown() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Menu m={"auto"} isOpen={isOpen}>
      <MenuButton variant="ghost" onMouseEnter={onOpen} onMouseLeave={onClose}>
        <Input
          textAlign={"center"}
          w={"50%"}
          placeholder="Start shopping..."
        />
      </MenuButton>
      <MenuList
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        align={"left"}
        w={"850px"}
        border={"3px solid #3e9d15"}
        textAlign="center"
        display={"flex"}
        flexDirection={"column"}
        gap={"10px"}
      >
        <Text color={"#b71761"} fontWeight={"bold"} fontSize={"20px"}>
          Trending Searches
        </Text>
        <Link fontSize={"12px"} href={"/cart"}>
          Organic
        </Link>
        <Link fontSize={"12px"} href={"/cart"}>
          Fresh Artisinal Breads
        </Link>
        <Link fontSize={"12px"} href={"/cart"}>
          Cold cuts & Seafood
        </Link>
        <Link fontSize={"12px"} href={"/cart"}>
          Diabetic Friendly Foods
        </Link>
        <Link fontSize={"12px"} href={"/cart"}>
          L'Exlusif
        </Link>
        <Link fontSize={"12px"} href={"/cart"}>
          Healthy Alternatives
        </Link>
        <Link fontSize={"12px"} href={"/cart"}>
          Bithday Anniversary Gift Hampers
        </Link>
        <Link fontSize={"12px"} href={"/cart"}>
          Platters & Dips
        </Link>
        <Link fontSize={"12px"} href={"/cart"}>
          Smoked Cheese
        </Link>
        <Link fontSize={"12px"} href={"/cart"}>
          Ice creames & Desserts
        </Link>
        <Link fontSize={"12px"} href={"/cart"}>
          Keto-Paleo
        </Link>
      </MenuList>
    </Menu>
  );
}

// export default function SearchDropdown() {
//   <div>
//     <ul>
//       <li>
//         <a href="#">Menu 1</a>
//         <ul>
//           <li>
//             <a href="#">Sub Menu 1</a>
//             <ul>
//               <li>
//                 <a href="#">Deep Sub Menu 1</a>
//               </li>
//               <li>
//                 <a href="#">Deep Sub Menu 2</a>
//               </li>
//               <li>
//                 <a href="#">Deep Sub Menu 3</a>
//               </li>
//               <li>
//                 <a href="#">Deep Sub Menu 4</a>
//               </li>
//               <li>
//                 <a href="#">Deep Sub Menu 5</a>
//               </li>
//               <li>
//                 <a href="#">Deep Sub Menu 6</a>
//               </li>
//               <li>
//                 <a href="#">Deep Sub Menu 7</a>
//               </li>
//               <li>
//                 <a href="#">Deep Sub Menu 8</a>
//               </li>
//             </ul>
//           </li>
//           <li>
//             <a href="#">Sub Menu 2</a>
//           </li>
//           <li>
//             <a href="#">Sub Menu 3</a>
//           </li>
//           <li>
//             <a href="#">Sub Menu 4</a>
//           </li>
//           <li>
//             <a href="#">Sub Menu 5</a>
//           </li>
//           <li>
//             <a href="#">Sub Menu 6</a>
//           </li>
//           <li>
//             <a href="#">Sub Menu 7</a>
//           </li>
//           <li>
//             <a href="#">Sub Menu 8</a>
//           </li>
//         </ul>
//       </li>
//       <li>
//         <a href="#">Menu 2</a>
//       </li>
//       <li>
//         <a href="#">Menu 3</a>
//       </li>
//       <li>
//         <a href="#">Menu 4</a>
//       </li>
//       <li>
//         <a href="#">Menu 5</a>
//       </li>
//       <li>
//         <a href="#">Menu 6</a>
//       </li>
//       <li>
//         <a href="#">Menu 7</a>
//       </li>
//       <li>
//         <a href="#">Menu 8</a>
//       </li>
//     </ul>
//   </div>;
// }
