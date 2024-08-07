import Breadcrumbs from "@generic/breadcrumbs";
import { useLocation } from "react-router-dom";

const Header:React.FC = () => {
   const location = useLocation();
   const { pathname } = location;

   const generateBreadcrumbs = () => {
      const pathnames = pathname.split('/').filter(x => x);
      return pathnames.map((value, index) => {
         const breadcrumbPath = `/${pathnames.slice(0, index + 1).join('/')}`;
         return {
            breadcrumbName: value.split(' ').map(c => c[0].toUpperCase() + c.slice(1)).join(' '),
            path: breadcrumbPath,
         };
      });
   };

   const routes = generateBreadcrumbs();

   return <Breadcrumbs routes={routes} />;
};

export default Header;
