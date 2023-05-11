import { Divider, List, ListSubheader } from "@mui/material";
import { DashboardSidebarItem } from "./DashboardSidebarItem";

const renderNavItems = ({ depth = 0, children, router }: any) => (
  <List disablePadding>
    {children.reduce(
      (acc: any, item: any) => reduceChildRoutes({ acc, depth, item, router }),
      []
    )}
  </List>
);

const reduceChildRoutes = ({ acc, depth, item, router }: any) => {
  if (!item) return acc;

  const key = item.categoryId;
  const partialMatch = item.router ? router.includes(item.router) : false;
  const exactMatch = router.split("?")[0] === item.router; // We don't compare query params

  // console.log('partialMatch', partialMatch)
  // console.log('router', router)
  // console.log('item.router', item.router)
  // console.log('item', item)
  if (item.children) {
    acc.push(
      <DashboardSidebarItem
        // active={partialMatch}
        active={exactMatch}
        depth={depth}
        key={key}
        open={partialMatch || item.open}
        path={item.router}
        title={item.title}
      >
        {renderNavItems({
          depth: depth + 1,
          children: item.children,
          router,
        })}
      </DashboardSidebarItem>
    );
  } else {
    acc.push(
      <DashboardSidebarItem
        // active={partialMatch}
        active={exactMatch}
        depth={depth}
        key={key}
        path={item.router}
        title={item.title}
      />
    );
  }

  return acc;
};

export const DashboardSidebarSection = (props: any) => {
  const { children, router, title, ...other } = props;

  return (
    <List
      subheader={
        <ListSubheader
          disableGutters
          disableSticky
          sx={{
            color: "sidebar.500",
            fontSize: "0.75rem",
            fontWeight: 700,
            lineHeight: 2.5,
            pl: 4,
            textTransform: "uppercase",
          }}
        >
          {title}
        </ListSubheader>
      }
      {...other}
    >
      {renderNavItems({
        children,
        router,
      })}
    </List>
  );
};
