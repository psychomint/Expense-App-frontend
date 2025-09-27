//http://localhost:3000/expense/ManageExpenses/${userId}?pageNumber=${pageNum}?rowsPerPage=${rowNum}
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination"

export default function ExpensesPagination({ currentPage, totalPages, setCurrentPage }) {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault()
              if (currentPage > 1) setCurrentPage(currentPage - 1)
            }}
          />
        </PaginationItem>

        {Array.from({ length: totalPages }).map((_, idx) => (
          <PaginationItem key={idx + 1}>
            <PaginationLink
              href="#"
              isActive={currentPage === idx + 1}
              onClick={(e) => {
                e.preventDefault()
                setCurrentPage(idx + 1)
              }}
            >
              {idx + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault()
              if (currentPage < totalPages) setCurrentPage(currentPage + 1)
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
