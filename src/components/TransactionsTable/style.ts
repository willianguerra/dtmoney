import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table { 
    width:100%;
    padding: 0rem 2rem;
    border-spacing:0 0.5rem;

    th { 
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
    }

    td { 
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);
      border-radius: 0.25rem;
    }
  }
`;