import { notFound } from "next/navigation"
import { getProjectBySlug, getAdjacentProjects } from "@/lib/projects-data"
import ProjectDetail from "@/components/project-detail"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  const { prev, next } = getAdjacentProjects(params.slug)

  return <ProjectDetail project={project} prevProject={prev} nextProject={next} />
}

export async function generateStaticParams() {
  const { projects } = await import("@/lib/projects-data")

  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} | Misha Gholami`,
    description: project.description,
  }
}
