// import SelectUnstyled, {
//   SelectUnstyledProps,
//   selectUnstyledClasses,
// } from "@mui/base/SelectUnstyled";
// import OptionUnstyled, {
//   optionUnstyledClasses,
// } from "@mui/base/OptionUnstyled";
// import OptionGroupUnstyled, {
//   OptionGroupUnstyledProps,
// } from "@mui/base/OptionGroupUnstyled";
// import PopperUnstyled from "@mui/base/PopperUnstyled";
// import { styled } from "@mui/system";
// import { categories } from "../../../constants";
// import React from "react";
// import { FormControl, Select } from "@mui/material";

// const blue = {
//   100: "#DAECFF",
//   200: "#99CCF3",
//   400: "#3399FF",
//   500: "#007FFF",
//   600: "#0072E5",
//   900: "#003A75",
// };

// const grey = {
//   50: "#f6f8fa",
//   100: "#eaeef2",
//   200: "#d0d7de",
//   300: "#afb8c1",
//   400: "#8c959f",
//   500: "#6e7781",
//   600: "#57606a",
//   700: "#424a53",
//   800: "#32383f",
//   900: "#24292f",
// };

// const StyledButton = styled("button")(
//   ({ theme }) => `
//   font-family: IBM Plex Sans, sans-serif;
//   font-size: 0.875rem;
//   box-sizing: border-box;
//   min-height: calc(1.5em + 22px);
//   min-width: 320px;
//   padding: 12px;
//   border-radius: 4px;
//   text-align: left;
//   line-height: 1.5;
//   background: transparent;
//   border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
//   color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};

//   transition-property: all;
//   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
//   transition-duration: 120ms;

//   &:hover {
//     background: transparent;
//     border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
//   }

//   &.${selectUnstyledClasses.focusVisible} {
//     border-color: ${blue[400]};
//     outline: 3px solid ${theme.palette.mode === "dark" ? blue[500] : blue[200]};
//   }

//   &.${selectUnstyledClasses.expanded} {
//     &::after {
//       content: '▴';
//     }
//   }

//   &::after {
//     content: '▾';
//     float: right;
//   }
//   `
// );

// const StyledListbox = styled("ul")(
//   ({ theme }) => `
//   font-family: IBM Plex Sans, sans-serif;
//   font-size: 0.875rem;
//   box-sizing: border-box;
//   padding: 6px;
//   margin: 12px 0;
//   min-width: 320px;
//   max-height: 400px;
//   border-radius: 4px;
//   overflow: auto;
//   outline: 0px;
//   background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
//   border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
//   color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
//   box-shadow: 0px 4px 30px ${
//     theme.palette.mode === "dark" ? grey[900] : grey[200]
//   };
//   `
// );

// const StyledOption = styled(OptionUnstyled)(
//   ({ theme }) => `
//   list-style: none;
//   padding: 8px;
//   border-radius: 8px;
//   cursor: default;

//   &:last-of-type {
//     border-bottom: none;
//   }

//   &.${optionUnstyledClasses.selected} {
//     background-color: ${theme.palette.mode === "dark" ? blue[900] : blue[100]};
//     color: ${theme.palette.mode === "dark" ? blue[100] : blue[900]};
//   }

//   &.${optionUnstyledClasses.highlighted} {
//     background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
//     color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
//   }

//   &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
//     background-color: ${theme.palette.mode === "dark" ? blue[900] : blue[100]};
//     color: ${theme.palette.mode === "dark" ? blue[100] : blue[900]};
//   }

//   &.${optionUnstyledClasses.disabled} {
//     color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
//   }

//   &:hover:not(.${optionUnstyledClasses.disabled}) {
//     background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
//     color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
//   }
//   `
// );

// const StyledGroupRoot = styled("li")`
//   list-style: none;
// `;

// const StyledGroupHeader = styled("span")`
//   display: block;
//   padding: 15px 0 5px 10px;
//   font-size: 0.75em;
//   font-weight: 600;
//   text-transform: uppercase;
//   letter-spacing: 0.05rem;
//   color: ${grey[600]};
// `;

// const StyledGroupOptions = styled("ul")`
//   list-style: none;
//   margin-left: 0;
//   padding: 0;

//   > li {
//     padding-left: 20px;
//   }
// `;

// const StyledPopper = styled(PopperUnstyled)`
//   z-index: 1;
// `;

// function CustomSelect(props: SelectUnstyledProps<string>) {
//   const slots: SelectUnstyledProps<string>["slots"] = {
//     root: StyledButton,
//     listbox: StyledListbox,
//     popper: StyledPopper,
//     ...props.slots,
//   };

//   return <SelectUnstyled {...props} slots={slots} />;
// }

// const CustomOptionGroup = React.forwardRef(function CustomOptionGroup(
//   props: OptionGroupUnstyledProps,
//   ref: React.ForwardedRef<any>
// ) {
//   const slots: OptionGroupUnstyledProps["slots"] = {
//     root: StyledGroupRoot,
//     label: StyledGroupHeader,
//     list: StyledGroupOptions,
//     ...props.slots,
//   };

//   return <OptionGroupUnstyled {...props} ref={ref} slots={slots} />;
// });

// type CategorySelectPropsType = {
//   onChange: React.EventHandler<any>;
//   value: string;
// };
// export default function CategorySelect(props: CategorySelectPropsType) {
//   const [categorySelect, setCategorySelect] = React.useState<any>();
//   const generateSelect = (options: any) => {
//     return options.map((option: any, key: number) => {
//       if (option.children) {
//         const children = generateSelect(option.children);
//         return (
//           <CustomOptionGroup key={key} label={option.title}>
//             {children}
//           </CustomOptionGroup>
//           // <optgroup key={key} label={option.title}>
//           //   {children}
//           // </optgroup>
//         );
//       } else {
//         return (
//           // <option value={option.categoryId} key={key}>
//           //   {option.title}
//           // </option>
//           <StyledOption
//             key={key}
//             value={option.categoryId}
//             onPointerDown={() => onSelect(option.categoryId)}
//           >
//             {option.title}
//           </StyledOption>
//         );
//       }
//     });
//   };

//   const onSelect = (categoryId: string) => {
//     props.onChange(categoryId);
//   };

//   React.useEffect(() => {
//     const children = generateSelect(categories);

//     const container = (
//       <CustomSelect defaultValue={props.value} value={props.value}>
//         {children}
//       </CustomSelect>
//       // <FormControl sx={{ minWidth: 120 }}>
//       //   <Select
//       //     defaultValue=""
//       //     native
//       //     onChange={props.onChange}
//       //     value={props.value}
//       //     label="Category"
//       //   >
//       //     {children}
//       //   </Select>
//       // </FormControl>
//     );
//     setCategorySelect(container);
//   }, [props.value]);
//   return categorySelect;
//   // return (
//   //   <CustomSelect>
//   //     {categorySelect}
//   //     {categories.map(
//   //       () => (
//   //         <CustomOptionGroup label="Hobbits">
//   //           <StyledOption value="Frodo">Frodo</StyledOption>
//   //           <StyledOption value="Sam">Sam</StyledOption>
//   //           <StyledOption value="Merry">Merry</StyledOption>
//   //           <StyledOption value="Pippin">Pippin</StyledOption>
//   //         </CustomOptionGroup>
//   //       )
//   //       // <CustomOptionGroup label="Elves">
//   //       //   <StyledOption value="Galadriel">Galadriel</StyledOption>
//   //       //   <StyledOption value="Legolas">Legolas</StyledOption>
//   //       // </CustomOptionGroup>
//   //     )}
//   //   </CustomSelect>
//   // );
// }

const CategorySelect = () => {
  return (
    <></>
  )
}

export default CategorySelect
