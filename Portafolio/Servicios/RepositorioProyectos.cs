using Portafolio.Models;

namespace Portafolio.Servicios
{
    public interface IRepositorioProyectos
    {
        List<ProyectoDTO> ObtenerProyectos();
    }
    public class RepositorioProyectos: IRepositorioProyectos
    {
        public List<ProyectoDTO> ObtenerProyectos()
        {
            return new List<ProyectoDTO>() {
                new ProyectoDTO
            {
                Titulo = "BalanceFin Pro",
                Descripcion = "Proyecto realizado con React y TypeScript",
                Link = "https://balance-fin-pro-team-joseth.netlify.app/",
                ImagenURL = "/imagenes/BalanceFin-Pro.jpg"
            },

                new ProyectoDTO
            {
                Titulo = "Gif Total",
                Descripcion = "Proyecto realizado con React y JavaScript",
                Link = "https://gif-experto-joseth.netlify.app/",
                ImagenURL = "/imagenes/Gif-Total.jpg"
            },
                new ProyectoDTO
            {
                Titulo = "Balance",
                Descripcion = "Proyecto realizado con React y TypeScript",
                Link = "https://balance-fin-pro-team-joseth.netlify.app/",
                ImagenURL = "/imagenes/BalanceFin-Pro.jpg"
            },
                new ProyectoDTO
            {
                Titulo = "Balance",
                Descripcion = "Proyecto realizado con React y TypeScript",
                Link = "https://balance-fin-pro-team-joseth.netlify.app/",
                ImagenURL = "/imagenes/BalanceFin-Pro.jpg"
            },
                new ProyectoDTO
            {
                Titulo = "Balance",
                Descripcion = "Proyecto realizado con React y TypeScript",
                Link = "https://balance-fin-pro-team-joseth.netlify.app/",
                ImagenURL = "/imagenes/BalanceFin-Pro.jpg"
            },
            };

        }
    }
}
