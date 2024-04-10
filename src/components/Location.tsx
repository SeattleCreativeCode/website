import React from "react";

interface Props {
  location: string;
}

const Location: React.FC<Props> = ({ location }: Props) => {
  switch (location) {
    case "TWO_PLUS_U":
      return (
        <>
          The Studio at 2+U
          <br />
          1203 2nd Ave
          <br />
          Seattle, WA 98101
        </>
      );
  }
};

export default Location;
