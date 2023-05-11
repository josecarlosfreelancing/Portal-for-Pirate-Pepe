export type PortalHeaderProps = {
  open: boolean;
  handleDrawerOpen: Function;
  handleDrawerClose: Function;
}

export type PortalSidebarProps = {
  open: boolean;
  handleDrawerClose: Function;
}

export type CategoryProps = {
  content: string,
  fields: Field[]
}

export type ViewProps = {
  title: string;
  categoryId: string;
}

export type Field = {
  title: string,
  href:  string
}