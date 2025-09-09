import { notFound } from "next/navigation"
import type { Metadata } from "next"
import ProjectDetail from "@/components/project-detail"
import { getProjectBySlug, getNextProject, getPreviousProject, getAllProjects } from "@/lib/projects-data"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const projects = getAllProjects()
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} - Misha Gholami`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  const nextProject = getNextProject(params.slug)
  const previousProject = getPreviousProject(params.slug)

  return <ProjectDetail project={project} nextProject={nextProject} previousProject={previousProject} />
}
