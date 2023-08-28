import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";

function Menu() {
  const items = [
    {
      label: "Users",
      icon: "pi pi-fw pi-user",
      items: [
        {
          label: "New",
          icon: "pi pi-fw pi-user-plus"
        },
        {
          label: "Delete",
          icon: "pi pi-fw pi-user-minus"
        },
        {
          label: "Search",
          icon: "pi pi-fw pi-users",
          items: [
            {
              label: "Filter",
              icon: "pi pi-fw pi-filter",
              items: [
                {
                  label: "Print",
                  icon: "pi pi-fw pi-print"
                }
              ]
            },
            {
              icon: "pi pi-fw pi-bars",
              label: "List"
            }
          ]
        }
      ]
    },
    {
      label: "Events",
      icon: "pi pi-fw pi-calendar",
      items: [
        {
          label: "Edit",
          icon: "pi pi-fw pi-pencil",
          items: [
            {
              label: "Save",
              icon: "pi pi-fw pi-calendar-plus"
            },
            {
              label: "Delete",
              icon: "pi pi-fw pi-calendar-minus"
            }
          ]
        },
        {
          label: "Archieve",
          icon: "pi pi-fw pi-calendar-times",
          items: [
            {
              label: "Remove",
              icon: "pi pi-fw pi-calendar-minus"
            }
          ]
        }
      ]
    },
    {
      label: "Quit",
      icon: "pi pi-fw pi-power-off"
    }
  ];

  const start = (
    <img
      alt='logo'
      src='showcase/images/logo.png'
      onError={(e) =>
        (e.target.src =
          "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
      }
      height='40'
      className='p-mr-2'
    ></img>
  );

  const end = <InputText placeholder='Search' type='text' />;

  return (
    <div>
      <div className='card'>
        <Menubar model={items} start={start} end={end} />
      </div>
    </div>
  );
}

export default Menu;
