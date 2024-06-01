/* Alert */
/* .alert {
  line-height: 1.5;
  padding: 10px 20px;
  background-color: gray;
  color: #fff;
}

.error {
  background-color: red;
}

.warning {
  background-color: orange;
}

.success {
  background-color: green;
} */

import styled from "styled-components";
import { theme } from "theme";

const getBgc = ({type}) => {
  switch (type) {
    case 'error':
      return theme.color.red;
    case 'warning':
      return theme.color.orange;
    case 'success':
      return theme.color.green;
    default:
      return theme.color.grey;
  }
}

export const StyledAlert = styled.p`
  line-height: 1.5;
  padding: 10px 20px;
  background-color: ${getBgc};
  color: #fff;
`