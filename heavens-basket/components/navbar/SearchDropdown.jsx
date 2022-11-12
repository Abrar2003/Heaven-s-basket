import {
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  Input,
  Text,
} from "@chakra-ui/react";

export default function SearchDropdown() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Menu isOpen={isOpen}>
      <MenuButton variant="ghost" onMouseEnter={onOpen} onMouseLeave={onClose}>
        <Input
          textAlign={"center"}
          w={"400px"}
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
      >
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
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
