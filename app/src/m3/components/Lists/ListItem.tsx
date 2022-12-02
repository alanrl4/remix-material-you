import { ListItem as MuiListItem, ListItemProps } from "@mui/material";

export default function ListItem({
    ...props
}: ListItemProps & { button?: true } & { href?: string }) {
    return <MuiListItem {...props} />;
}
