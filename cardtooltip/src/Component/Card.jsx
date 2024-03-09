import React from "react";
import Chip from "@mui/material/Chip";
import styles from "./Card.module.css";

import { Tooltip } from "@mui/material";

function Card({ data }) {
   const { image, title, follows, slugs, songs } = data;
   return (
      <Tooltip title={`${songs.length} Songs`} placement="top" arrow>
         <div className={styles.wraper}>
            <div className={styles.card}>
               <img src={image} alt="banner" />
               <div className={styles.banner}>
                  <div>
                     <Chip className={styles.pill} size="small" label={`${follows} Follows`} />
                  </div>
               </div>
            </div>
            <div className={styles.titleWrapper}>
               <p>{title}</p>
            </div>
         </div>
      </Tooltip>
   );
}
export default Card;
